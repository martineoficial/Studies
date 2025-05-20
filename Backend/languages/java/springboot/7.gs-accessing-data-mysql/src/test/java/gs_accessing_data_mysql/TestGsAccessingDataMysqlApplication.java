package gs_accessing_data_mysql;

import org.springframework.boot.SpringApplication;

public class TestGsAccessingDataMysqlApplication {

	public static void main(String[] args) {
		SpringApplication.from(GsAccessingDataMysqlApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
