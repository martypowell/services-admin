using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using services.Models;

namespace services.Providers
{
    public class DynamoDbServiceProvider : IServicesProvider
    {
        private static IAmazonDynamoDB _dbClient;
        private readonly DynamoDBContext _dbContext;

        public DynamoDbServiceProvider(IAmazonDynamoDB dbClient)
        {
            _dbClient = dbClient;
            _dbContext = new DynamoDBContext(_dbClient);
        }

        public async Task<Service> AddService(Service service)
        {
            await _dbContext.SaveAsync<Service>(service);

            return await _dbContext.LoadAsync<Service>(service.Id);
        }

        public async Task<IEnumerable<Service>> GetServices()
        {
            return await _dbContext.ScanAsync<Service>(null)
                .GetRemainingAsync();
        }

        public async Task<Service> UpdateService(int id, Service service)
        {
            var serviceToUpdate = await _dbContext.LoadAsync<Service>(service.Id);

            // Set db service to the updated value
            serviceToUpdate = service;

            await _dbContext.SaveAsync(serviceToUpdate);

            return await _dbContext.LoadAsync<Service>(service.Id);
        }
    }
}
