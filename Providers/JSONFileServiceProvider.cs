using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using services.Models;

namespace services.Providers
{
    public class JSONFileServiceProvider : IJSONFileServiceProvider
    {
        public IEnumerable<Service> GetServices()
        {
            throw new NotImplementedException();
        }

        public bool AddService(
            Service Service)
        {
            throw new NotImplementedException();
        }
    }
}
