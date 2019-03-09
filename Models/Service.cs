﻿using Amazon.DynamoDBv2.DataModel;
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
        public string Agency { get; set; }
        public IEnumerable<string> Keywords { get; set; }
        public bool IsMostPopularService { get; set; }
    }
}
