require 'jwt'
require_relative '../.token_key.rb'

class ApplicationController < ActionController::API
    def secret_key
        $key
    end
    def encode(payload)
        JWT.encode(payload, secret_key)
    end
    def decode(token)
        JWT.decode(token, secret_key)[0]
     end
end
