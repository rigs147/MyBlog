using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
//using Microsoft.Owin.Security.OAuth;
using System.Web.Http.Routing;
using Newtonsoft.Json.Serialization;
//using System.Web.Routing;

namespace MyBlogDataService
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            //config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                "PostFormData",
                "blobs/upload",
                new { controller = "Blobs", action = "PostBlobUpload" },
                new { httpMethod = new HttpMethodConstraint(HttpMethod.Post) }
            );

            config.Routes.MapHttpRoute(
                "GetBlobDownload",
                "blobs/{blobId}/download",
                new { controller = "Blobs", action = "GetBlobDownload" }
                //new { httpMethod = new HttpMethodConstraint(HttpMethod.Get) }
            );

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
