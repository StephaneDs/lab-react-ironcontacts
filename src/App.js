import contactList from "./contacts.json"
import "./App.css"
import { useState } from "react"

// const contacts = [
// contactList[0],
// contactList[1],
// contactList[2],
// contactList[3],
// contactList[5],
// ]

function App() {
  const [contacts, setContacts] = useState(contactList.slice(0, 5))
  return (
    <div className="App">
      <button
        onClick={(e) => {
          e.preventDefault()
          const remainingContacts = contactList.filter(
            (contact) => !contacts.includes(contact)
          )
          const id = Math.floor(Math.random() * remainingContacts.length)
          setContacts([...contacts, remainingContacts[id]])
        }}
      >
        Add Random Contact
      </button>
      <button
        onClick={() => {
          const toBeSorted = [...contacts]
          const sortedByName = toBeSorted.sort((a, b) => {
            if (a.name > b.name) {
              return 1
            }
            if (a.name < b.name) {
              return -1
            }
            return 0
          })
          setContacts(sortedByName)
        }}
      >
        Sort by name
      </button>
      <button
        onClick={() => {
          const toBeSorted = [...contacts]
          const sortedByPopularity = toBeSorted.sort((a, b) => {
            if (a.popularity < b.popularity) {
              return 1
            }
            if (a.popularity > b.popularity) {
              return 1
            }
            return -1
          })
          setContacts(sortedByPopularity)
        }}
      >
        Sort by popularity
      </button>
      <table>
        <thead>
          <h2>Ironcontacts</h2>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((e, i) => {
            return (
              <tr key={i}>
                <td>
                  <img src={e.pictureUrl} className="picture" alt="" />
                </td>
                <td>{e.name}</td>
                <td>{e.popularity}</td>
                {e.wonOscar ? <td>🏆</td> : <td></td>}
                {e.wonEmmy ? <td>🏆</td> : <td></td>}
                <td>
                  <button
                    onClick={() => {
                      const newContacts = [...contacts]
                      newContacts.splice(i, 1)
                      setContacts(newContacts)
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App
