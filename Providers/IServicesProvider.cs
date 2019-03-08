using System.Collections.Generic;
using System.Threading.Tasks;
using services.Models;

namespace services.Providers
{
    public interface IServicesProvider
    {
        Task<IEnumerable<Service>> GetServices();
        Task<Service> AddService(
            Service service);
        Task<Service> UpdateService(
            int id,
            Service service);
    }
}
