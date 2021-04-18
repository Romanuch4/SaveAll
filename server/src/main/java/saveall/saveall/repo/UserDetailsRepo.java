package saveall.saveall.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import saveall.saveall.domain.User;

public interface UserDetailsRepo extends JpaRepository<User, String> {
}
