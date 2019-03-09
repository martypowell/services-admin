using Amazon.DynamoDBv2.DataModel;
using System.Collections.Generic;

namespace services.Models
{
    [DynamoDBTable("Services")]
    public class Service
    {
        [DynamoDBHashKey]
        public string Id { get; set; }
        [DynamoDBRangeKey]
        public string Name { get; set; }
        public string Category { get; set; }
        public string Agency { get; set; }
        public List<string> Keywords { get; set; }
        public bool IsMostPopularService { get; set; }
    }
}
