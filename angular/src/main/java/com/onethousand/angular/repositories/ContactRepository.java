package com.onethousand.angular.repositories;

import com.onethousand.angular.model.Contact;
import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<Contact, String> {
    @Override
    Contact findOne(String id);

    @Override
    void delete(Contact deleted);
}