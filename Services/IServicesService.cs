using services.Models;
using System.Collections.Generic;

namespace services.Services
{
    public interface IServicesService
    {
        IEnumerable<Service> GetServices();
        Service SaveService();
    }
}
