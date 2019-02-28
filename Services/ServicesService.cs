using System;
using System.Collections.Generic;
using System.Linq;
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

        public Service GetService(int id) =>
            GetServices().FirstOrDefault(x => x.Id == id);

        public IEnumerable<Service> GetServices() => _serviceProvider.GetServices();

        public Service AddService(Service service)
        {
            var newService  = _serviceProvider.AddService(service);

            return service;
        }

        public Service UpdateService(int id, Service service)
        {
            var updatedService = _serviceProvider.UpdateService(id, service);

            return updatedService;
        }
    }
}
