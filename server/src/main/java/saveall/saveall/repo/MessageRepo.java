package saveall.saveall.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import saveall.saveall.domain.Message;

public interface MessageRepo extends JpaRepository<Message, Long> {
}
