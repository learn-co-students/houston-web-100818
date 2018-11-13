class User < ApplicationRecord
    has_secure_password

    
    # def password=(value)
    #     self.password_digest = much_better_hashing_function(value)
    # end

end