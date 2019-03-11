using System;
using System.Text;

namespace services
{
    public static class Utilities
    {
        public static byte[] GetTokenSecret()
        {
            var tokenSecret = Environment.GetEnvironmentVariable("TokenSecret");
            return Encoding.ASCII.GetBytes(tokenSecret);
        }
    }
}
