using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using services.Models;
using services.Services;

namespace services.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly IMemoryCache _cache;
        private readonly IServicesService _servicesService;
        private const string SERVICE_LIST_CACHE_KEY = "services-list";
        private const string SERVICE_PREFIX_CACHE_KEY = "service-";

        public ServicesController(IMemoryCache memoryCache, IServicesService servicesService)
        {
            _cache = memoryCache;
            _servicesService = servicesService;
        }

        // GET: api/Services
        [HttpGet]
        public IEnumerable<Service> Get()
        {
            // Look for cache key.
            if (!_cache.TryGetValue(SERVICE_LIST_CACHE_KEY, out IEnumerable<Service> services))
            {
                // Key not in cache, so get data.
                services = _servicesService.GetServices();

                // Set cache options.
                var cacheEntryOptions = new MemoryCacheEntryOptions()
                    // Keep in cache for this time, reset time if accessed.
                    .SetSlidingExpiration(TimeSpan.FromMinutes(3));

                // Save data in cache.
                _cache.Set(SERVICE_LIST_CACHE_KEY, services, cacheEntryOptions);
            }

            return services;
        }

        // GET: api/Services/5
        [HttpGet("{id}", Name = "Get")]
        public Service Get(int id)
        {
            var cacheKey = SERVICE_PREFIX_CACHE_KEY + id.ToString();

            // Look for cache key.
            if (!_cache.TryGetValue(cacheKey, out Service service))
            {
                // Key not in cache, so get data.
                service = _servicesService.GetService(id);

                // Set cache options.
                var cacheEntryOptions = new MemoryCacheEntryOptions()
                    // Keep in cache for this time, reset time if accessed.
                    .SetSlidingExpiration(TimeSpan.FromMinutes(3));

                // Save data in cache.
                _cache.Set(cacheKey, service, cacheEntryOptions);
            }

            return service;
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
