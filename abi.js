var abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_managerAddress",
          "type": "address"
        }
      ],
      "name": "AddManager",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_manager",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_validatedAddress",
          "type": "address"
        }
      ],
      "name": "AddressValidation",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_donor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_destinationAddress",
          "type": "address"
        }
      ],
      "name": "Donation",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "address payable",
              "name": "organizationAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "organizationName",
              "type": "string"
            },
            {
              "internalType": "enum KriptoBagis.OrganizationType[]",
              "name": "organizationTypes",
              "type": "uint8[]"
            },
            {
              "internalType": "bool",
              "name": "isValidated",
              "type": "bool"
            }
          ],
          "indexed": false,
          "internalType": "struct KriptoBagis.Organization",
          "name": "_a",
          "type": "tuple"
        }
      ],
      "name": "OrganizationAdded",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "organizationName",
          "type": "string"
        },
        {
          "internalType": "enum KriptoBagis.OrganizationType[]",
          "name": "organizationTypes",
          "type": "uint8[]"
        }
      ],
      "name": "addNewOrganization",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAddresses",
      "outputs": [
        {
          "internalType": "address payable[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getAddress",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address payable",
              "name": "organizationAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "organizationName",
              "type": "string"
            },
            {
              "internalType": "enum KriptoBagis.OrganizationType[]",
              "name": "organizationTypes",
              "type": "uint8[]"
            },
            {
              "internalType": "bool",
              "name": "isValidated",
              "type": "bool"
            }
          ],
          "internalType": "struct KriptoBagis.Organization",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "charityAddress",
          "type": "address"
        }
      ],
      "name": "getAddressInfos",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "enum KriptoBagis.OrganizationType[]",
          "name": "",
          "type": "uint8[]"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "destinationAddress",
          "type": "address"
        },
        {
          "internalType": "address payable[]",
          "name": "otherAddresses",
          "type": "address[]"
        },
        {
          "internalType": "uint256",
          "name": "mainPercentage",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "destinationAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "mainPercentage",
          "type": "uint256"
        }
      ],
      "name": "depositDirect",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "validatingAddress",
          "type": "address"
        }
      ],
      "name": "validateCharityAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "managerAddress",
          "type": "address"
        }
      ],
      "name": "addManagerAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalDonationsAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getHighestDonation",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "destroy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]