import pytest
from sqlalchemy import insert, select, text, delete
from models import User


# test db connection
def test_db_connection(db_session):
    # Use db_session to interact with the database
    result = db_session.execute(text("SELECT 1"))
    assert result.scalar() == 1

# test to insert a user
# you can count this as one of your 5 test cases :)
def test_insert_user(db_session, sample_signup_input):
    insert_stmt = insert(User).values(sample_signup_input)

    # execute insert query
    db_session.execute(insert_stmt)
    # commit the changes to the db
    db_session.commit()

    # not part of the app.py code, just being used to get the inserted data
    selected_user = db_session.query(User).filter_by(FirstName="Calista").first()

    assert selected_user is not None
    assert selected_user.LastName == "Phippen"

def test_remove_user(db_session, sample_signup_input):
    insert_stmt = insert(User).values(sample_signup_input)

    # execute insert query
    db_session.execute(insert_stmt)
    # commit the changes to the db
    db_session.commit()
    
    db_session.query(User).filter_by(FirstName="Calista").delete()
    db_session.commit()

    deleted_user = db_session.query(User).filter_by(FirstName="Calista").first()
    assert deleted_user is None

def test_login(db_session, sample_signup_input,sample_login_input):
    insert_stmt = insert(User).values(sample_signup_input)
    db_session.execute(insert_stmt)
    db_session.commit()

    login_email = sample_login_input["Email"]
    login_password = sample_login_input["Password"]

    user = db_session.query(User).filter_by(Email=login_email, Password=login_password).first()

    assert user is not None
    assert user.Email == login_email
    assert user.Password == login_password

@pytest.mark.xfail
def test_false_login(db_session, sample_signup_input):
    insert_stmt = insert(User).values(sample_signup_input)
    db_session.execute(insert_stmt)
    db_session.commit()

    login_email = "theWrongEmail@gmail.com"
    login_password = "incorrectPass"

    user = db_session.query(User).filter_by(Email=login_email, Password=login_password).first()

    assert user is not None
    assert user.Email == login_email
    assert user.Password == login_password


def test_bad_data(db_session):




    

