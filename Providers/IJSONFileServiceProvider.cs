using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using services.Models;

namespace services.Providers
{
    public interface IJSONFileServiceProvider
    {
        IEnumerable<Service> GetServices();
        bool AddService(
            Service Service);
    }
}
