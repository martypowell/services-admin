﻿using System;
using System.Collections.Generic;
using System.Linq;
using services.Models;

namespace services.Services
{
    public class ServicesService : IServicesService
    {
        public Service GetService(int id) =>
            GetServices().FirstOrDefault(x => x.Id == id);

        public IEnumerable<Service> GetServices() => new List<Service>()
        {
            new Service()
            {
                Id = 1,
                Name = "Report a Pothole",
                Agency = "Public Works",
                Keywords = new List<string>()
                {
                    "pothole",
                    "street",
                    "road"
                },
                IsMostPopularService = true
            },
            new Service() {
                Id = 2,
                Name = "Icy Condtions",
                Agency = "Public Works",
                Keywords = new List<string>()
                {
                    "ice",
                    "street",
                    "road"
                },
                IsMostPopularService = true
            }
        };

        public Service SaveService()
        {
            throw new NotImplementedException();
        }
    }
}
