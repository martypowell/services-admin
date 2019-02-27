using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using services.Models;
using services.Services;

namespace services.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly IServicesService _servicesService;

        public ServicesController(IServicesService servicesService)
        {
            _servicesService = servicesService;
        }

        // GET: api/Services
        [HttpGet]
        public IEnumerable<Service> Get()
        {
            var services = _servicesService.GetServices();

            return services;
        }

        // GET: api/Services/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Services
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Services/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
