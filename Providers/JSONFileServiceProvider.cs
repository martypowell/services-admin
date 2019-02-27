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
        public IEnumerable<Service> GetServices()
        {
            var servicesAsJson = GetServicesAsJson();

            return servicesAsJson.ToObject<IEnumerable<Service>>();
        }

        public Service AddService(
            Service Service)
        {
            throw new NotImplementedException();
        }

        private dynamic GetServicesAsJson()
        {
            var fileConent = File.ReadAllText(dataFilePath);
            return JArray.Parse(fileConent);
        }
    }
}
