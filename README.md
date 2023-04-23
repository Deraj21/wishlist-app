# Christmas wishlist app
## The Basics:
### Explanation:
This website allows you to easily keep track of where you can write a wishlist, and invite people to view it and check off things that they have already gotten.
Everyone except the owner of the list can see what has been purchased already, so that duplicate presents aren't a thing on Christmas morning.
### Example:
1. I create a wishlist with the items “Frisbee” and “soda”, and share it with Bob and Sally.
2. Bob gets me the Frisbee, and crosses it off the list.
3. I look at the list and don't see a change; I add more items.
4. Sally looks at the list and sees the crossed off Frisbee, so she looks for something else to get from the list.

---

## Functional Overview (requirements)

### MPV
- A user can log in and immediately see their wishlist
- A user can add, edit, and delete items from their list
- A user can invite other people to their list
- Invitees cannot edit, add, or delete list items on another owners list
- Invitees can see the list, and check items that they have gotten for the list owner
- All invitees can see which items are check, by whom, and when they were checked
- The list owner cannot see which items have been checked or not

### Post-mvp Ideas
- A user can group items in their list
- User can have multiple lists
- When a user logs in, they can see all their lists
- A user can see all the lists they have been invited to
- User can attach images or links to list items
- Invitees can comment on a list item, either to the owner or one of the other viewers.

---

## Questions
- What should happens when a user deletes an item from their list that someone has checked? (and probably purchased)
    - For now, nothing; later, maybe it sends a notification to the user that checked the item?

---

## Technical Overview (MVP)
### Database
- Host on heroku
- MongoDB schema:

    ```json
    {
        "users": [
            {
                "username": "deraj21",
                "id": "2966357694725604",
                "email": "deraj21@gmail.com",
                "name": "Jared Tanner",
                "listItems": [
                    {
                        "text": "Spiced ginger beer :P",
                        "order": 0,
                        "checked": true,
                        "checkedBy": "rachelfowers",
                        "checkedOn": "/yyyyMMddTHH:mmzzz/"
                    },
                    {
                        "text": "Popcorn bin",
                        "order": 1,
                        "checked": false,
                        "checkedBy": "",
                        "checkedOn": null
                    }
                ]
            }
        ]
    }
    ```

### Node server
- to serve up react app
- API for database
- Creates cookies / users

### React frontend
- Find some kind of component library to use.
    - Material react ui

### Invitation
- 2 options: You load the app with the base url or by a shared link
- Either way, it checks to see if you are logged in or not
- If you are logged in, you are taken to your list (base url) or someone else’s list (shared link)
- If you aren’t logged in, it takes you to the login page, and stores the url you initially tried going to as a redirect to go to once you’ve logged in
- Once you get where you intended, the site checks to see if you are at a list that you own
- If you are, you can change the list, but not see which items are checked
- If you are on someone else’s list, the opposite is true; you cannot edit, but you can see which items are checked

### Routing
- Home  `/`
- Login `/login`
- List  `/list/:listId`

--- 

## Todo
- [x] ~~Create-react-app~~
- [x] ~~Npm install anticipated dependencies~~
- [x] ~~Research best react ui libraries~~
- [x] ~~Set up basic routes~~
- [x] ~~Create github repo~~
- [x] ~~Create todo list in github~~
- [ ] **List functionality**
  - [ ] Set up dummy data
  - [ ] Display list
  - [ ] Edit item
  - [ ] Add item
  - [ ] Delete item
- [ ] **Node express server**
  - [ ] cookies
  - [ ] oAuth
  - [ ] Serve up react build folder
- [ ] **Database**
  - [ ] Learn mongo db (or other document-based db)
  - [ ] Create db
  - [ ] Add to node server
- [ ] **Back in react:**
  - [ ] User login page
  - [ ] Routing for user’s list
