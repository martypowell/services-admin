using services.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace services.Services
{
    public interface IServicesService
    {
        /// <summary>
        /// Gets a List of Services
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<Service>> GetServices();

        /// <summary>
        /// Get a Service by it's service id
        /// </summary>
        /// <param name="id">Primary Key associated with the service.</param>
        /// <returns></returns>
        Task<Service> GetService(int id);

        /// <summary>
        /// Save a Service
        /// </summary>
        /// <returns>Returns the saved service with new or updated values.</returns>
        Task<Service> AddService(Service service);

        /// <summary>
        /// Update an existing Service
        /// </summary>
        /// <param name="id">Primary Key associated with the service.</param>
        /// <param name="service">Updated representation of the Existing service.</param>
        /// <returns></returns>
        Task<Service> UpdateService(int id, Service service);
    }
}
