library crowdfunding_library;

use std::{
    identity::Identity,
    contract_id::ContractId,
};

abi CrowdFunding {
    #[storage(read, write)]
    fn create_project(owner: Identity, projectName: str[15], goal_amount: u64, author: str[10]) -> Project;
}

// Project Struct.
pub struct Project {
    uniqueId: u64,
    is_active: bool,
    author: str[10],
    owner: Identity,
    amount: u64,
    projectname: str[15]
}