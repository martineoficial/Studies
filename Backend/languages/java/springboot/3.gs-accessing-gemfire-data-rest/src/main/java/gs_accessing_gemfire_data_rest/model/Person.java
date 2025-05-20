package gs_accessing_gemfire_data_rest.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceCreator;
import org.springframework.data.gemfire.mapping.annotation.Region;

import java.util.concurrent.atomic.AtomicLong;

@Data
// A anotação @Data é uma anotação de projeto do Lombok que combina as funcionalidades de @ToString, @EqualsAndHashCode, @Getter, @Setter e @RequiredArgsConstructor.
@Region("People")
// A anotação @Region é usada para mapear uma classe de domínio para uma região GemFire.
public class Person {
    private static AtomicLong COUNTER = new AtomicLong(0L);

    @Id
    private Long id;

    private String firstName;
    private String lastName;

    @PersistenceCreator
    public Person() {
        this.id = COUNTER.incrementAndGet();
    }
}
