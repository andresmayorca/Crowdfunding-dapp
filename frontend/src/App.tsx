import React, { useEffect, useState } from "react";
import { Wallet } from "fuels";
import "./App.css";
// Import the contract factory -- you can find the name in index.ts.
// You can also do command + space and the compiler will suggest the correct name.
import { CrowdfundingContractsAbi__factory } from "./contracts";
// The address of the contract deployed the Fuel testnet
const CONTRACT_ID = "0x99bd77efaa0ea6a0669c014ea5d02911ebef39d45e748bbb971de5f8";

//the private key from createWallet.js
const WALLET_SECRET = "0x94bf0578ead8aa2ef74c8c607d6ac30fc3072e0cf714a32e890205899337c82c"
// Create a Wallet from given secretKey in this case
// The one we configured at the chainConfig.json
const wallet = new Wallet(WALLET_SECRET, "https://node-beta-1.fuel.network/graphql");
// Connects out Contract instance to the deployed contract
// address using the given wallet.

const contract = CrowdfundingContractsAbi__factory.connect(CONTRACT_ID, wallet);

export default function App(){
  const [loading, setLoading] = useState(false);
  const [projectId, setUniqueId] = useState('');
  const [projectname, setprojectname] = useState('');
  const [amount, setAmount] = useState('');
  const [author, setAuthor] = useState('');
  const [project_id, setProjectId] = useState('');
  const [projectCreation] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    console.log("projectname", projectname);
    console.log("amount", amount);
    console.log("author", author);
  },[projectname, amount, author]);

  async function create_project(e: any){
    e.preventDefault();
    setLoading(true);
    try {
      console.log("creating project")
      const { value } = await contract.functions.create_project(projectname, amount, author).txParams({gasPrice: 1}).call();

      console.log("Project name", value.projectname);
      console.log("Author", value.author)
      console.log("Project ID", value.uniqueId.toString())
      setProjectId(value.uniqueId.toString())
      alert('Project created');
    } catch (err: any) {
      alert(err.message)
    } finally {
      setLoading(false);
    }
  }
return (
  <div>
    <form id="createEventForm" onSubmit={create_project}>
    <input value = {projectname} onChange={e => setprojectname(e.target.value) }name="projectname" type="text" placeholder="Enter project name" />
      <input value = {amount} onChange={e => setAmount(e.target.value)} name="amount" type="number" placeholder="Enter amount for the contributions" />
      <input value = {author} onChange={e => setAuthor(e.target.value)} name="author" type="text" placeholder="Enter author" />
      <button disabled={loading}>
        {loading ? "creating..." : "create"}
      </button>
    </form>
    <div>
      <input name="projectId" onChange={e => setProjectId(e.target.value)} placeholder="pass in the eventID"/>
    </div>
    <div> 
    {projectCreation &&
    <>
    <h1> New project created</h1>
    <h2> Project Name: {projectname} </h2>
    <h2> Project ID: {projectId}</h2>
    <h2> Amount: {amount}</h2>
    <h2> Author: {author}</h2>
    </>
    }
    </div> 
    <div>
    </div>
  </div>
);
}