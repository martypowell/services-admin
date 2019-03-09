using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.Model;
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
            service.Id = Guid.NewGuid().ToString();

            await _dbContext.SaveAsync(service);

            return await _dbContext.LoadAsync(service);
        }

        public async Task<IEnumerable<Service>> GetServices()
        {
            return await _dbContext.ScanAsync<Service>(null)
                .GetRemainingAsync();
        }

        public async Task<Service> UpdateService(int id, Service service)
        {
            var serviceToUpdate = await _dbContext.LoadAsync(service);

            // Set db service to the updated value
            serviceToUpdate = service;

            await _dbContext.SaveAsync(serviceToUpdate);

            return await _dbContext.LoadAsync(service);
        }
    }
}
