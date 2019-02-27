using services.Models;
using System.Collections.Generic;

namespace services.Services
{
    public interface ServicesServiceInterface
    {
        IEnumerable<Service> GetService();
        Service SaveService();
    }
}
