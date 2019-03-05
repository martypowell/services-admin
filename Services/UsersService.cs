﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using services.Models;

namespace services.Services
{
    public class UsersService : IUsersService
    {
        private readonly List<User> _users = new List<User>
        {
            new User() {
                Id = 1,
                FirstName = "Test",
                LastName = "User",
                Username = "martypowell",
                Password = "test"
            }
        };

        private readonly IConfiguration _config;

        public UsersService(IConfiguration config)
        {
            _config = config;
        }

        public User Authenticate(string username, string password)
        {
            var user = _users
                .SingleOrDefault(x => x.Username == username && x.Password == password);

            // return null if user not found
            if (user == null)
            {
                return null;
            }

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var secret = _config.GetSection("AppSettings:Secret")?.Value;
            var key = Encoding.ASCII.GetBytes(secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            // remove password before returning
            user.Password = null;

            return user;
        }

        public IEnumerable<User> GetAll() =>
            _users.Select(x =>
            {
                x.Password = null;
                return x;
            });
    }
}
