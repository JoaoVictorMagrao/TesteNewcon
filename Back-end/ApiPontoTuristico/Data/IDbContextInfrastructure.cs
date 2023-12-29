namespace ApiPontoTuristico.Data
{
    internal interface IDbContextInfrastructure
    {
        void UseInternalServiceProvider(object value);
    }
}