using services.Models;
using System.Collections.Generic;

namespace services.Services
{
    public interface IServicesService
    {
        /// <summary>
        /// Gets a List of Services
        /// </summary>
        /// <returns></returns>
        IEnumerable<Service> GetServices();

        /// <summary>
        /// Get a Service by it's service id
        /// </summary>
        /// <param name="id">Primary Key associated with the service.</param>
        /// <returns></returns>
        Service GetService(int id);

        /// <summary>
        /// Save a Service
        /// </summary>
        /// <returns>Returns the saved service with new or updated values.</returns>
        Service SaveService();
    }
}
