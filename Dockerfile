FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 48377
EXPOSE 44318

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["services.csproj", ""]
RUN dotnet restore "/services.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "services.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "services.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "services.dll"]