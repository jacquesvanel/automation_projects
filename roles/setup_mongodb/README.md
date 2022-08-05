MongoDB 
=========

This role will go through:
 - install of MongoDB Enterprise Software for RHEL8
 - install of MongoDB Developer Tools
 - setup config files for:
        - config servers
        - shard servers
        - mongos servers
 - setup service files to control mongodb
 - initiate the servers
 - add users
 - add role for ldap
 
Requirements
------------

 - This role uses ansible tower to be deployed
 - uses mongodb enterprise software
 - has only been tested and used on RHEL8

Role Variables
--------------

*These variables are defined in Ansible Tower job Survey*
 - Type of install
    - full_install
        - this will start an install of everything the role provides as mentioned above
    - uninstall
        - this will uninstall any previous mongodb enterprise install
    - reinstall
        - this will run the uninstall script and then run a full_install
    - run_configs_only
        - this will run the config_tasks.yml only
        - we use this to update config files 
        - assumes mongo is already installed and running
    - install_base
        - this will only install the base mongodb and will not set up any configs or differentiate between shards and config servers
    - run_initiate_tasks
        - this will rerun the initiate_tasks.yml
 - Target
    - this is used to define the servers that you want to run the scripts against
 - env
    - use this to select the enviorment variable ie: dev,prod,dsit
 - configsvr_rsa
 - configsvr_rsb
 - configsvr_rsc
 - shard1a
 - shard1b
 - shard1c
 - shard2a
 - shard2b
 - shard2c
 - shard3a
 - shard3b
 - shard3c
 - dbname

*These variables are set in the /vars/main.yml*
 - keyfile
 - keycert
 - tlspass
 - packages
 - ldap
 - ieproot
 - cacert

Dependencies
------------

A list of other roles hosted on Galaxy should go here, plus any details in regards to parameters that may need to be set for other roles, or variables that are used from other roles.

Example Playbook
----------------

Including an example of how to use your role (for instance, with variables passed in as parameters) is always nice for users too:

    - hosts: servers
      roles:
         - { role: username.rolename, x: 42 }

License
-------

BSD

Author Information
------------------

An optional section for the role authors to include contact information, or a website (HTML is not allowed).
