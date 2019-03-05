using System;
using System.Collections.Generic;
using services.Models;

namespace services.Services
{
    public class UserService : IUserService
    {
        public User Authenticate(string username, string password)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}
