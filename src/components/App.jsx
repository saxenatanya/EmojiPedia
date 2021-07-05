import React from "react";
import Header from "./Header";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function CreateEntry(entry){
return <Entry 
key={entry.id}
emoji={entry.emoji}
name={entry.name}
description={entry.meaning} />
}

function App() {
  return (
    <div>
      <Header  />

      <dl className="dictionary">
        {emojipedia.map(CreateEntry)}
        </dl>
    </div>
  );
}

export default App;
