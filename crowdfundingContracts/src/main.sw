contract;

dep crowdfunding_library;
use crowdfunding_library::*;


use std::{
    identity::Identity,
    contract_id::ContractId,
    storage::StorageMap,
    chain::auth::{AuthError, msg_sender},
    context::{call_frames::msg_asset_id, msg_amount, this_balance},
    result::Result,
    revert::revert,
};

storage {
    projects: StorageMap<u64, Project> = StorageMap {},
    project_id_counter: u64 = 0,
}

impl CrowdFunding for Contract {
    #[storage(read, write)]
    fn create_project(projectName: str[15], amount: u64, author: str[10]) -> Project {
        let project_id = storage.project_id_counter;
        let newProject = Project {
            uniqueId: project_id,
            projectname: projectName,
            author: author,
            is_active: true,
            owner: msg_sender().unwrap(),
            amount: amount
        };

        storage.projects.insert(project_id, newProject);
        storage.project_id_counter += 1;
        let mut selectedProject = storage.projects.get(storage.project_id_counter -1);
        return selectedProject;
    }

}
