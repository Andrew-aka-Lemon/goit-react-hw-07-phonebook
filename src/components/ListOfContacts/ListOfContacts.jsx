import { useDispatch, useSelector } from 'react-redux';
import { contactsSlice } from 'redux/contactsSlice';
import { getFilter, getContacts } from 'redux/selectors';

import { Lishka, NotUglyBtn } from './ListOfContacts.styled';

const ListOfContacts = () => {
  const { removeContact } = contactsSlice.actions;
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const contactDeleter = id => {
    dispatch(removeContact(id));
  };

  const listToRender = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });

  return (
    <div>
      <ul>
        {listToRender.map(({ id, name, number }) => {
          return (
            <Lishka key={id}>
              <span>
                {name}: {number}
              </span>
              <NotUglyBtn type="button" onClick={() => contactDeleter(id)}>
                Delete
              </NotUglyBtn>
            </Lishka>
          );
        })}
      </ul>
    </div>
  );
};

export default ListOfContacts;
