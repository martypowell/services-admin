using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Protocols;
using services.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace services.Providers
{
    public class JSONFileServiceProvider : IServicesProvider
    {
        private static readonly string dataFilePath = "./data/services.json";

        public IEnumerable<Service> GetServices() =>
            GetServicesFromFile();

        public Service AddService(
            Service service)
        {
            var services = GetServices().ToList();
            var newId = services.Max(x => x.Id) + 1;

            service.Id = newId;

            services.Add(service);

            File.WriteAllText(dataFilePath, JsonConvert.SerializeObject(services));

            return service;
        }

        private JArray GetServicesAsJson()
        {
            var fileConent = File.ReadAllText(dataFilePath);
            return JArray.Parse(fileConent);
        }

        private IEnumerable<Service> GetServicesFromFile()
        {
            var jsonArray = GetServicesAsJson();
            return jsonArray.ToObject<IEnumerable<Service>>();
        }
    }
}
