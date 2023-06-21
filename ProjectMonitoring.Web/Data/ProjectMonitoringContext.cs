using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using ProjectMonitoring.Web.Models;

namespace ProjectMonitoring.Web.Data
{
    public class ProjectMonitoringContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ProjectMonitoringContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {

        }
    }
}