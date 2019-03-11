using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using services.Models;
using services.Providers;

namespace services.Services
{
    public class ServicesService : IServicesService
    {
        private readonly IServicesProvider _serviceProvider;

        public ServicesService(IServicesProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task<Service> GetService(string id)
        {
            var services = await GetServices();
            return services.FirstOrDefault(x => x.Id == id);
        }

        public async Task<IEnumerable<Service>> GetServices() => 
            await _serviceProvider.GetServices();

        public async Task<Service> AddService(Service service)
        {
            var newService  = await _serviceProvider.AddService(service);

            return service;
        }

        public async Task<Service> UpdateService(string id, Service service) =>
            await _serviceProvider.UpdateService(id, service);
    }
}
