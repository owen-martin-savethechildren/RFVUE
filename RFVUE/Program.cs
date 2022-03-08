//using Microsoft.AspNetCore.SpaServices;
using VueCliMiddleware;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//builder.Services.AddAuthentication(
//        CertificateAuthenticationDefaults.AuthenticationScheme)
//    .AddCertificate();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//services cors
builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "app/dist";
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app cors
app.UseCors("corsapp");

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseAuthorization();

//app.UseCors(prodCorsPolicy);

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "app";
    if (app.Environment.IsDevelopment())
    {
        spa.UseVueCli(npmScript: "serve");
    }
});

app.MapControllers();

//app.UseSpaStaticFiles();

//app.UseRouting();

//app.UseAuthorization();

//app.UseEndpoints(endpoints =>
//{
//    endpoints.MapControllers();

//    endpoints.MapToVueCliProxy(
//        "{*path}",
//        new SpaOptions { SourcePath = "app" },
//        npmScript: (System.Diagnostics.Debugger.IsAttached) ? "serve" : null,
//        regex: "Compiled successfully",
//        forceKill: true
//        );
//});



app.Run();
