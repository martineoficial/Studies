package gs_rest_hateoas.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.hateoas.RepresentationModel;

public class Greeting extends RepresentationModel<Greeting> {
    // A classe Greeting é um modelo de recurso que exibe uma mensagem de saudação. Ela estende RepresentationModel<Greeting> para adicionar suporte a HATEOAS. HATEOAS é um acrônimo para Hypermedia as the Engine of Application State, que significa que a resposta para uma solicitação HTTP é mais do que apenas os dados solicitados. Ela também contém links para outros recursos relacionados.

    private final String content;

    @JsonCreator
    // A anotação @JsonCreator é usada para marcar um construtor como um construtor que pode ser usado durante a desserialização de JSON para um objeto Java. O construtor é chamado durante a desserialização para criar uma instância do objeto Java correspondente.
    public Greeting(@JsonProperty("content") String content) {
        // A anotação @JsonProperty é usada para marcar um argumento de construtor, método setter ou campo de classe como um campo que pode ser desserializado a partir de JSON. O valor do campo JSON é mapeado para o campo Java correspondente.
        this.content = content;
    }

    public String getContent() {
        return content;
    }
}
