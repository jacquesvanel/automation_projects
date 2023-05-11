Role Name
base_install_mongodb
=========
This is an Ansible role for installing needed content for a base install of mongodb.

Tasks included in this role
  add_certs.yml: Adds SSL certificates on the target server
  hugepages.yml: Configures hugepages on the target server
  install_base.yml: Installs base packages and dependencies on the target server
  install_dbtools.yml: Installs database tools on the target server
  install_mms_agent.yml: Installs the MongoDB monitoring agent on the target server
  logrotate.yml: Configures logrotate on the target server
  make_file.yml: Creates all needed directories on the target server
  set_fact.yml: Sets a fact on the target server
  uninstall.yml: Uninstalls all packages and dependencies from the target server

Requirements
------------

Any pre-requisites that may not be covered by Ansible itself or the role should be mentioned here. For instance, if the role uses the EC2 module, it may be a good idea to mention in this section that the boto package is required.

Role Variables
--------------
base_packages: base mongodb packages
dbtools: dbtool packages 
owner: mongod
group: opr-db-admin
keyfile: url location for keyfile.pem
keycert: url location for KeyWCert.pem
ldap: url location for ldap.conf
ieproot: url location for iep_root_intermediate.pem 
cacert: url location for CA_Root_Inter.pem


Dependencies
------------

A list of other roles hosted on Galaxy should go here, plus any details in regards to parameters that may need to be set for other roles, or variables that are used from other roles.

Example Playbook
----------------
---
# tasks file for base_install_mongodb
- name: set facts
  include_tasks: set_fact.yml
  when: env is not defined

- name: uninstall
  import_tasks: uninstall.yml
  tags:
    - uninstall
    - never

- name: install base mongodb
  import_tasks: install_base.yml
  tags:
    - base

- name: install mongodb tools
  import_tasks: install_dbtools.yml
  tags:
    - dbtools

- name: make directories
  import_tasks: make_file.yml
  tags:
    - make_file

- name: add certs
  import_tasks: add_certs.yml
  tags:
    - add_certs

- name: add logrotate file
  import_tasks: logrotate.yml
  tags:
    - logrotate

- name: add hugepages fix
  import_tasks: hugepages.yml
  tags:
    - hugepages

- name: install mongodb_mms_agent
  import_tasks: install_mms_agent.yml
  tags:
    - mms_agent

License
-------

BSD

Author Information
------------------

An optional section for the role authors to include contact information, or a website (HTML is not allowed).
