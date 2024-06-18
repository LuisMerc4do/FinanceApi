using System.Linq;
using System.Security.Claims;

namespace FinanceApi.Extensions
{
    public static class ClaimsExtensions
    {
        public static string GetUsername(this ClaimsPrincipal user)
        {
            return user?.Claims
                       .SingleOrDefault(x => x.Type == ClaimTypes.GivenName)?.Value ?? "Username not found";
        }
    }
}
