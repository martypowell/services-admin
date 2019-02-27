using System.Collections.Generic;

namespace services.Models
{
    public class Service
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Agency { get; set; }
        public IEnumerable<string> Keywords { get; set; }
        public bool IsMostPopularService { get; set; }
    }
}
