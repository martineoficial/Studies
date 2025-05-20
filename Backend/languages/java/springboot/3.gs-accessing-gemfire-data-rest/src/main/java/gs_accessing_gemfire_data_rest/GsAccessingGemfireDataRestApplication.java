package gs_accessing_gemfire_data_rest;

import gs_accessing_gemfire_data_rest.model.Person;
import org.apache.geode.cache.client.ClientRegionShortcut;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.gemfire.config.annotation.ClientCacheApplication;
import org.springframework.data.gemfire.config.annotation.EnableEntityDefinedRegions;
import org.springframework.data.gemfire.repository.config.EnableGemfireRepositories;

@SpringBootApplication
@ClientCacheApplication(name = "AccessingDataRestApplication"
        // O nome do aplicativo cliente do Apache Geode (ou Pivotal GemFire).
)
// A anotação @ClientCacheApplication é usada para configurar um aplicativo cliente do Apache Geode (ou Pivotal GemFire).
@EnableEntityDefinedRegions(basePackageClasses = Person.class,
        // A classe de domínio Person é usada como base para a pesquisa de classes de domínio.
        clientRegionShortcut = ClientRegionShortcut.LOCAL
        // O atalho do cliente da região GemFire é LOCAL.
)
// A anotação @EnableEntityDefinedRegions é usada para configurar regiões GemFire com base em entidades de domínio.
@EnableGemfireRepositories
// A anotação @EnableGemfireRepositories é usada para habilitar a funcionalidade de repositório do Spring Data GemFire.
@SuppressWarnings("unused")
// A anotação @SuppressWarnings é usada para suprimir avisos do compilador.
public class GsAccessingGemfireDataRestApplication {

    public static void main(String[] args) {
        SpringApplication.run(GsAccessingGemfireDataRestApplication.class, args);
    }

}
