using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using services.Models;

namespace services.Providers
{
    public interface IServicesProvider
    {
        IEnumerable<Service> GetServices();
        Service AddService(
            Service service);
        Service UpdateService(
            int id,
            Service service);
    }
}
