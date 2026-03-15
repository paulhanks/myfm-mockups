import React, { useState } from 'react';

// SVG Icon Components
const ChevronRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

// NRM3 Taxonomy Data Structure
const nrm3Data = {
  id: 'root',
  label: 'NRM3 Asset Taxonomy',
  children: [
    {
      id: '0',
      code: '0',
      label: 'Facilitating Works',
      assetCount: 12,
      children: []
    },
    {
      id: '1',
      code: '1',
      label: 'Substructure',
      assetCount: 8,
      children: []
    },
    {
      id: '2',
      code: '2',
      label: 'Superstructure',
      assetCount: 24,
      children: []
    },
    {
      id: '3',
      code: '3',
      label: 'Internal Finishes',
      assetCount: 15,
      children: []
    },
    {
      id: '4',
      code: '4',
      label: 'Fittings & Furnishings',
      assetCount: 18,
      children: []
    },
    {
      id: '5',
      code: '5',
      label: 'Services',
      assetCount: 156,
      children: [
        {
          id: '5.1',
          code: '5.1',
          label: 'Sanitary Installations',
          assetCount: 22,
          children: []
        },
        {
          id: '5.2',
          code: '5.2',
          label: 'Mechanical',
          assetCount: 48,
          children: [
            { id: '5.2.1', code: '5.2.1', label: 'AHU - Air Handling Unit', assetCount: 1, children: [] },
            { id: '5.2.2', code: '5.2.2', label: 'FCU - Fan Coil Unit', assetCount: 1, children: [] },
            { id: '5.2.3', code: '5.2.3', label: 'Chiller', assetCount: 1, children: [] },
            { id: '5.2.4', code: '5.2.4', label: 'Boiler', assetCount: 1, children: [] }
          ]
        },
        {
          id: '5.3',
          code: '5.3',
          label: 'Electrical',
          assetCount: 35,
          children: []
        },
        {
          id: '5.4',
          code: '5.4',
          label: 'Lift & Conveyor',
          assetCount: 8,
          children: []
        },
        {
          id: '5.5',
          code: '5.5',
          label: 'Fire',
          assetCount: 18,
          children: []
        },
        {
          id: '5.6',
          code: '5.6',
          label: 'Communication',
          assetCount: 12,
          children: []
        },
        {
          id: '5.7',
          code: '5.7',
          label: 'Building Management',
          assetCount: 10,
          children: []
        },
        {
          id: '5.8',
          code: '5.8',
          label: 'Security',
          assetCount: 3,
          children: []
        }
      ]
    },
    {
      id: '6',
      code: '6',
      label: 'Prefabricated Buildings',
      assetCount: 5,
      children: []
    },
    {
      id: '7',
      code: '7',
      label: 'Work to Existing Buildings',
      assetCount: 9,
      children: []
    },
    {
      id: '8',
      code: '8',
      label: 'External Works',
      assetCount: 31,
      children: []
    }
  ]
};

// Asset Details Data
const assetDetails = {
  '5.2.1': {
    name: 'Air Handling Unit (AHU)',
    description: 'Central air handling unit for primary ventilation and conditioning',
    nrmPath: ['5-Services', '5.2-Mechanical', '5.2.1-AHU'],
    criticality: 'A',
    conditionGrade: '2',
    lifespan: '15-20 years',
    replacementCost: '£18,000 - £35,000',
    facilities: ['Banking Branch', 'Lab', 'Office'],
    procedures: [
      { code: 'SFG20-5.2.1-01', name: 'Filter Inspection & Replacement', frequency: 'Monthly', skill: 'HVAC Technician', duration: '2h', priority: 'High' },
      { code: 'SFG20-5.2.1-02', name: 'Belt & Drive Inspection', frequency: 'Quarterly', skill: 'HVAC Technician', duration: '1.5h', priority: 'High' },
      { code: 'SFG20-5.2.1-03', name: 'Annual Overhaul & Performance Test', frequency: 'Annual', skill: 'Senior HVAC Engineer', duration: '8h', priority: 'Critical' },
      { code: 'SFG20-5.2.1-04', name: 'Ductwork Cleaning', frequency: '2 Yearly', skill: 'Specialist Contractor', duration: '16h', priority: 'Medium' }
    ],
    variants: [
      { country: 'UK', legislation: 'Building Regulations Part L', frequency: 'Monthly', requirements: 'Energy audit every 5 years', status: 'Validated' },
      { country: 'NL', legislation: 'NEN 2656', frequency: 'Bi-monthly', requirements: 'IAQ monitoring required', status: 'Validated' },
      { country: 'US', legislation: 'ASHRAE 62.1', frequency: 'Monthly', requirements: 'Airflow balancing annually', status: 'Pending Review' },
      { country: 'DE', legislation: 'DIN 1946-4', frequency: 'Quarterly', requirements: 'Microbiological testing', status: 'Validated' }
    ]
  },
  '5.2.2': {
    name: 'Fan Coil Unit (FCU)',
    description: 'Terminal heating/cooling unit with fan for zone climate control',
    nrmPath: ['5-Services', '5.2-Mechanical', '5.2.2-FCU'],
    criticality: 'B',
    conditionGrade: '3',
    lifespan: '10-15 years',
    replacementCost: '£2,500 - £6,000',
    facilities: ['Office', 'Hotel', 'Banking Branch'],
    procedures: [
      { code: 'SFG20-5.2.2-01', name: 'Filter Check & Clean', frequency: 'Monthly', skill: 'Maintenance Tech', duration: '0.5h', priority: 'Medium' },
      { code: 'SFG20-5.2.2-02', name: 'Coil Cleaning', frequency: 'Quarterly', skill: 'HVAC Technician', duration: '2h', priority: 'High' },
      { code: 'SFG20-5.2.2-03', name: 'Valve Operation Test', frequency: 'Semi-Annual', skill: 'HVAC Technician', duration: '1h', priority: 'Medium' }
    ],
    variants: [
      { country: 'UK', legislation: 'Building Regulations', frequency: 'Quarterly', requirements: 'None additional', status: 'Validated' },
      { country: 'NL', legislation: 'NEN 2656', frequency: 'Bi-monthly', requirements: 'Filter disposal certification', status: 'Pending Review' },
      { country: 'US', legislation: 'ASHRAE 62.1', frequency: 'Quarterly', requirements: 'Commissioning certificate', status: 'Validated' },
      { country: 'DE', legislation: 'DIN 1946-4', frequency: 'Quarterly', requirements: 'Hygiene standards per RLT-Richtlinie', status: 'Validated' }
    ]
  },
  '5.2.3': {
    name: 'Chiller',
    description: 'Refrigeration unit for cooling water distribution loops',
    nrmPath: ['5-Services', '5.2-Mechanical', '5.2.3-Chiller'],
    criticality: 'A',
    conditionGrade: '2',
    lifespan: '15-20 years',
    replacementCost: '£45,000 - £120,000',
    facilities: ['Lab', 'Data Center', 'Hospital'],
    procedures: [
      { code: 'SFG20-5.2.3-01', name: 'Daily Performance Log', frequency: 'Daily', skill: 'Operator', duration: '0.5h', priority: 'Critical' },
      { code: 'SFG20-5.2.3-02', name: 'Water Quality Test', frequency: 'Monthly', skill: 'HVAC Technician', duration: '2h', priority: 'High' },
      { code: 'SFG20-5.2.3-03', name: 'Compressor Efficiency Test', frequency: 'Quarterly', skill: 'Senior Engineer', duration: '4h', priority: 'High' },
      { code: 'SFG20-5.2.3-04', name: 'Major Service & Refrigerant Check', frequency: 'Annual', skill: 'Specialist Contractor', duration: '16h', priority: 'Critical' }
    ],
    variants: [
      { country: 'UK', legislation: 'F-Gas Regulations', frequency: 'Annual', requirements: 'Certified engineer leak test', status: 'Validated' },
      { country: 'NL', legislation: 'EPBD & F-Gas', frequency: 'Bi-annual', requirements: 'Energy audit + leak test', status: 'Validated' },
      { country: 'US', legislation: 'EPA Clean Air Act', frequency: 'Annual', requirements: 'Certified technician, log maintenance', status: 'Validated' },
      { country: 'DE', legislation: 'FKG & EPBD', frequency: 'Annual', requirements: 'Tightness check required', status: 'Pending Review' }
    ]
  },
  '5.2.4': {
    name: 'Boiler',
    description: 'Hot water generation unit for heating distribution',
    nrmPath: ['5-Services', '5.2-Mechanical', '5.2.4-Boiler'],
    criticality: 'A',
    conditionGrade: '1',
    lifespan: '15-25 years',
    replacementCost: '£8,000 - £25,000',
    facilities: ['Office', 'Hotel', 'Hospital', 'Lab'],
    procedures: [
      { code: 'SFG20-5.2.4-01', name: 'Daily System Check', frequency: 'Daily', skill: 'Operator', duration: '0.5h', priority: 'Critical' },
      { code: 'SFG20-5.2.4-02', name: 'Gas Pressure Test', frequency: 'Monthly', skill: 'Gas Engineer', duration: '1.5h', priority: 'High' },
      { code: 'SFG20-5.2.4-03', name: 'Combustion Analysis', frequency: 'Annual', skill: 'Certified Gas Engineer', duration: '3h', priority: 'High' },
      { code: 'SFG20-5.2.4-04', name: 'Full Service & Safety Check', frequency: 'Annual', skill: 'Certified Gas Engineer', duration: '6h', priority: 'Critical' }
    ],
    variants: [
      { country: 'UK', legislation: 'Gas Safety Regulations', frequency: 'Annual', requirements: 'Gas Safe certificate, CP45', status: 'Validated' },
      { country: 'NL', legislation: 'NEN 2680 & EPBD', frequency: 'Annual', requirements: 'Inspection by KIWA installer', status: 'Validated' },
      { country: 'US', legislation: 'NFPA 8', frequency: 'Annual', requirements: 'Licensed boiler technician', status: 'Pending Review' },
      { country: 'DE', legislation: 'EN 12098-5 & EPBD', frequency: 'Annual', requirements: 'TÜV inspection certificate', status: 'Validated' }
    ]
  }
};

// Tree Node Component
const TreeNode = ({ node, expanded, onToggle, selected, onSelect, searchFilter }) => {
  const isLeaf = !node.children || node.children.length === 0;
  const matchesFilter = !searchFilter ||
    node.label.toLowerCase().includes(searchFilter.toLowerCase()) ||
    node.code.toLowerCase().includes(searchFilter.toLowerCase());

  if (!matchesFilter) return null;

  const hasVisibleChildren = node.children && node.children.some(child =>
    !searchFilter || child.label.toLowerCase().includes(searchFilter.toLowerCase()) ||
    child.code.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="text-sm">
      <div
        className={`flex items-center gap-1 py-1 px-2 rounded cursor-pointer transition-colors ${
          selected === node.id
            ? 'bg-blue-500 text-white'
            : 'hover:bg-gray-100 text-gray-700'
        }`}
        onClick={() => {
          onSelect(node.id);
          if (!isLeaf && hasVisibleChildren) {
            onToggle(node.id);
          }
        }}
      >
        {!isLeaf && hasVisibleChildren ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle(node.id);
            }}
            className="p-0 hover:bg-gray-200 rounded"
          >
            {expanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
          </button>
        ) : (
          <div className="w-4 h-4" />
        )}
        <div className="flex-1">
          <span className="font-medium">{node.code}</span>
          <span className="ml-2 text-xs">{node.label}</span>
        </div>
        <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">
          {node.assetCount}
        </span>
      </div>

      {expanded && node.children && (
        <div className="ml-4 border-l border-gray-300 pl-0">
          {node.children.map(child => (
            <TreeNode
              key={child.id}
              node={child}
              expanded={expanded}
              onToggle={onToggle}
              selected={selected}
              onSelect={onSelect}
              searchFilter={searchFilter}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Asset Details Panel
const AssetDetailsPanel = ({ assetId, activeTab, setActiveTab }) => {
  const asset = assetDetails[assetId];

  if (!asset) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p>Select an asset from the taxonomy to view details</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        {['details', 'procedures', 'variants'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 font-medium text-sm transition-colors ${
              activeTab === tab
                ? 'text-blue-600 border-b-2 border-blue-600 -mb-px'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab === 'details' && 'Asset Details'}
            {tab === 'procedures' && 'Linked Procedures'}
            {tab === 'variants' && 'Country Variants'}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'details' && (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{asset.name}</h2>
              <p className="text-gray-600 mt-1">{asset.description}</p>
            </div>

            {/* NRM Path */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">NRM3 Classification Path</h3>
              <div className="flex items-center gap-2 flex-wrap">
                {asset.nrmPath.map((path, idx) => (
                  <React.Fragment key={idx}>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">
                      {path}
                    </span>
                    {idx < asset.nrmPath.length - 1 && (
                      <span className="text-gray-400">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Default Attributes */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Default Attributes</h3>
              <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-medium text-gray-700">Criticality Level</td>
                      <td className="px-4 py-3 text-gray-600">{asset.criticality}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-medium text-gray-700">Condition Grade</td>
                      <td className="px-4 py-3 text-gray-600">{asset.conditionGrade}/5</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-medium text-gray-700">Typical Lifespan</td>
                      <td className="px-4 py-3 text-gray-600">{asset.lifespan}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-700">Replacement Cost</td>
                      <td className="px-4 py-3 text-gray-600">{asset.replacementCost}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Facility Types */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Applicable Facility Types</h3>
              <div className="flex flex-wrap gap-2">
                {['Banking Branch', 'Lab', 'Cleanroom', 'Office', 'Hotel', 'Hospital', 'Data Center'].map(
                  facility => (
                    <label key={facility} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        defaultChecked={asset.facilities.includes(facility)}
                        className="rounded"
                      />
                      <span className="text-sm text-gray-700">{facility}</span>
                    </label>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'procedures' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">SFG20 Linked Procedures</h3>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700">
                <PlusIcon /> Link New Procedure
              </button>
            </div>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">SFG20 Code</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Procedure Name</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Frequency</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Skill Required</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Duration</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {asset.procedures.map((proc, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-mono text-xs text-blue-600">{proc.code}</td>
                      <td className="px-4 py-3 text-gray-700">{proc.name}</td>
                      <td className="px-4 py-3 text-gray-600">{proc.frequency}</td>
                      <td className="px-4 py-3 text-gray-600">{proc.skill}</td>
                      <td className="px-4 py-3 text-gray-600">{proc.duration}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            proc.priority === 'Critical'
                              ? 'bg-red-100 text-red-700'
                              : proc.priority === 'High'
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {proc.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'variants' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Country-Specific Overrides</h3>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Country</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Legislation Reference</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Modified Frequency</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Additional Requirements</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {asset.variants.map((variant, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium text-gray-700">{variant.country}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{variant.legislation}</td>
                      <td className="px-4 py-3 text-gray-600">{variant.frequency}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{variant.requirements}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            variant.status === 'Validated'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-amber-100 text-amber-700'
                          }`}
                        >
                          {variant.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Component
export default function AssetTaxonomyBrowser() {
  const [expandedNodes, setExpandedNodes] = useState(new Set(['root', '5']));
  const [selectedNode, setSelectedNode] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');
  const [activeTab, setActiveTab] = useState('details');

  const handleToggle = (nodeId) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const handleSelect = (nodeId) => {
    setSelectedNode(nodeId);
    setActiveTab('details');
  };

  return (
    <div className="h-screen w-full bg-gray-50 flex">
      {/* Left Panel - Taxonomy Tree */}
      <div className="w-3/10 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700">
          <h1 className="text-lg font-bold text-white mb-3">MyFM Asset Manager</h1>
          {/* Search */}
          <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search taxonomy..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>
        </div>

        {/* Tree */}
        <div className="flex-1 overflow-y-auto p-3">
          {nrm3Data.children.map(node => (
            <TreeNode
              key={node.id}
              node={node}
              expanded={expandedNodes.has(node.id)}
              onToggle={handleToggle}
              selected={selectedNode}
              onSelect={handleSelect}
              searchFilter={searchFilter}
            />
          ))}
        </div>

        {/* Footer Stats */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="text-xs text-gray-600">
            <p>Total Assets: <span className="font-bold text-gray-900">385</span></p>
            <p>Selected: {selectedNode ? <span className="font-bold text-blue-600">{selectedNode}</span> : <span className="text-gray-500">None</span>}</p>
          </div>
        </div>
      </div>

      {/* Right Panel - Asset Details */}
      <div className="w-7/10 flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-bold text-gray-900">Asset Details & Procedures</h2>
          <p className="text-sm text-gray-600 mt-1">Manage NRM3 assets and linked SFG20 procedures</p>
        </div>

        {/* Content */}
        <div className="flex-1">
          <AssetDetailsPanel
            assetId={selectedNode}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
              criticality: 'Medium',
              facilities: ['datacenter', 'lab', 'cleanroom']
            }
          }
        },
        '5.7': { name: 'Ventilation', subElements: {} },
        '5.8': {
          name: 'Electrical Power',
          subElements: {
            'ups-001': {
              code: 'UPS-001',
              name: 'Uninterruptible Power Supply',
              criticality: 'Critical',
              facilities: ['banking', 'datacenter']
            }
          }
        },
        '5.9': { name: 'Fuel Installation', subElements: {} },
        '5.10': { name: 'Lifts & Conveyors', subElements: {} },
        '5.11': {
          name: 'Fire & Lightning Protection',
          subElements: {
            'fire-panel-001': {
              code: 'FP-001',
              name: 'Fire Alarm Control Panel',
              criticality: 'Critical',
              facilities: ['banking', 'datacenter', 'lab', 'office']
            },
            'sprinkler-001': {
              code: 'SPR-001',
              name: 'Sprinkler System',
              criticality: 'Critical',
              facilities: ['banking', 'office', 'warehouse']
            }
          }
        },
        '5.12': {
          name: 'Communications, Security & Control',
          subElements: {
            'cctv-001': {
              code: 'CCTV-001',
              name: 'CCTV System',
              criticality: 'High',
              facilities: ['banking', 'datacenter', 'warehouse']
            },
            'env-mon-001': {
              code: 'ENV-001',
              name: 'Environmental Monitoring System',
              criticality: 'High',
              facilities: ['lab', 'cleanroom']
            }
          }
        },
        '5.13': {
          name: 'Specialist Installations',
          subElements: {
            'autoclave-001': {
              code: 'AUTO-001',
              name: 'Autoclave Sterilizer',
              criticality: 'High',
              facilities: ['lab', 'cleanroom']
            },
            'vault-door-001': {
              code: 'VAULT-001',
              name: 'Vault Door Mechanism',
              criticality: 'Critical',
              facilities: ['banking']
            }
          }
        }
      }
    },
    '6': {
      name: 'Prefabricated Buildings',
      elements: {}
    },
    '7': {
      name: 'Work to Existing Buildings',
      elements: {}
    },
    '8': {
      name: 'External Works',
      elements: {}
    }
  };

  // Asset Details & Procedures
  const assetDetails = {
    'ahu-001': {
      code: 'AHU-001',
      name: 'HVAC Air Handling Unit',
      criticality: 'High',
      description: 'Primary air handling unit for comfort cooling and ventilation throughout facility zones',
      facilities: ['Banking Branch', 'Data Centre', 'Laboratory'],
      condition: 'Good',
      model: 'Carrier 50XC080-090',
      lifecycle: {
        installed: '2019-03-15',
        nextService: '2026-04-01',
        expectedLife: '20 years'
      },
      procedures: [
        { id: 1, name: 'AHU Filter Replacement', frequency: 'Quarterly', priority: 'Amber', skills: ['HVAC Technician'], duration: '2 hours' },
        { id: 2, name: 'AHU Belt Inspection', frequency: 'Monthly', priority: 'Green', skills: ['HVAC Technician', 'Electrician'], duration: '1.5 hours' },
        { id: 3, name: 'Bearing & Motor Check', frequency: 'Semi-Annual', priority: 'Amber', skills: ['HVAC Technician'], duration: '3 hours' },
        { id: 4, name: 'Full System Commissioning', frequency: 'Annual', priority: 'Red', skills: ['HVAC Technician', 'Controls Engineer'], duration: '8 hours' }
      ],
      countries: {
        uk: { validated: true, amendments: 'Standard EN 13141 compliance required' },
        de: { validated: true, amendments: 'DIN 1946 ventilation standards apply' },
        us: { validated: false, amendments: 'Awaiting ASHRAE 62.1 assessment' }
      }
    },
    'chiller-001': {
      code: 'CHILLER-001',
      name: 'Chilled Water Unit',
      criticality: 'Medium',
      description: 'Centrifugal chiller providing primary cooling for life sciences clean rooms',
      facilities: ['Data Centre', 'Laboratory', 'Cleanroom'],
      condition: 'Good',
      model: 'Trane CenTraVac 19XL',
      lifecycle: {
        installed: '2018-06-20',
        nextService: '2026-04-15',
        expectedLife: '25 years'
      },
      procedures: [
        { id: 1, name: 'Refrigerant Check', frequency: 'Monthly', priority: 'Green', skills: ['Certified Refrigeration Tech'], duration: '1.5 hours' },
        { id: 2, name: 'Oil Analysis', frequency: 'Annual', priority: 'Amber', skills: ['Certified Refrigeration Tech'], duration: '2 hours' },
        { id: 3, name: 'Condenser Water Treatment', frequency: 'Quarterly', priority: 'Amber', skills: ['HVAC Technician'], duration: '3 hours' }
      ],
      countries: {
        uk: { validated: true, amendments: 'F-Gas Regulation (EU 517/2014) compliance' },
        de: { validated: true, amendments: 'ChemKlimV requirements apply' },
        us: { validated: true, amendments: 'EPA Section 608 certification required' }
      }
    },
    'fire-panel-001': {
      code: 'FP-001',
      name: 'Fire Alarm Control Panel',
      criticality: 'Critical',
      description: 'Central fire detection and alarm system control panel for entire facility',
      facilities: ['Banking Branch', 'Data Centre', 'Laboratory', 'Office'],
      condition: 'Excellent',
      model: 'Tyco Integrated Fire & Security IFS7000',
      lifecycle: {
        installed: '2021-11-10',
        nextService: '2026-03-20',
        expectedLife: '15 years'
      },
      procedures: [
        { id: 1, name: 'Fire Alarm Test', frequency: 'Weekly', priority: 'Red', skills: ['Fire Safety Engineer'], duration: '1 hour' },
        { id: 2, name: 'Full System Test', frequency: 'Annual', priority: 'Red', skills: ['Certified Fire Safety Engineer'], duration: '6 hours' },
        { id: 3, name: 'Battery Backup Test', frequency: 'Monthly', priority: 'Amber', skills: ['Fire Safety Engineer'], duration: '0.5 hours' }
      ],
      countries: {
        uk: { validated: true, amendments: 'BS 5839-1:2017 Fire detection & alarm systems' },
        de: { validated: true, amendments: 'DIN 14675 fire alarm system standard' },
        us: { validated: true, amendments: 'NFPA 72 National Fire Alarm Code' }
      }
    },
    'cctv-001': {
      code: 'CCTV-001',
      name: 'CCTV System',
      criticality: 'High',
      description: 'Multi-camera security video surveillance system with 90-day retention',
      facilities: ['Banking Branch', 'Data Centre', 'Warehouse'],
      condition: 'Good',
      model: 'Axis Network Camera System',
      lifecycle: {
        installed: '2020-02-14',
        nextService: '2026-03-30',
        expectedLife: '10 years'
      },
      procedures: [
        { id: 1, name: 'Camera Lens Cleaning', frequency: 'Monthly', priority: 'Green', skills: ['Security Technician'], duration: '2 hours' },
        { id: 2, name: 'Recording System Health Check', frequency: 'Bi-Weekly', priority: 'Amber', skills: ['Security Technician', 'IT Support'], duration: '1 hour' },
        { id: 3, name: 'Full System Backup Verification', frequency: 'Quarterly', priority: 'Amber', skills: ['IT Support', 'Security Manager'], duration: '2 hours' }
      ],
      countries: {
        uk: { validated: true, amendments: 'GDPR compliance for video storage' },
        de: { validated: true, amendments: 'GDPR and BDSG data protection' },
        us: { validated: false, amendments: 'State-level video retention laws vary' }
      }
    },
    'env-mon-001': {
      code: 'ENV-001',
      name: 'Environmental Monitoring System',
      criticality: 'High',
      description: 'Real-time temperature, humidity and particle monitoring for GMP cleanroom compliance',
      facilities: ['Laboratory', 'Cleanroom'],
      condition: 'Excellent',
      model: 'Vaisala BME280 Environmental Sensors',
      lifecycle: {
        installed: '2022-08-05',
        nextService: '2026-04-10',
        expectedLife: '8 years'
      },
      procedures: [
        { id: 1, name: 'Sensor Calibration', frequency: 'Quarterly', priority: 'Red', skills: ['GMP Compliance Officer', 'Lab Technician'], duration: '2 hours' },
        { id: 2, name: 'Data Logger Verification', frequency: 'Monthly', priority: 'Amber', skills: ['Lab Technician'], duration: '1 hour' },
        { id: 3, name: 'Annual Compliance Audit', frequency: 'Annual', priority: 'Red', skills: ['GMP Compliance Officer'], duration: '4 hours' }
      ],
      countries: {
        uk: { validated: true, amendments: 'PIC/S GMP Annex 1 cleanroom requirements' },
        de: { validated: true, amendments: 'EU GMP Annex 1 requirements' },
        us: { validated: true, amendments: 'FDA 21 CFR Part 11 validation' }
      }
    },
    'autoclave-001': {
      code: 'AUTO-001',
      name: 'Autoclave Sterilizer',
      criticality: 'High',
      description: 'Gravity displacement autoclave for lab equipment and material sterilization',
      facilities: ['Laboratory', 'Cleanroom'],
      condition: 'Good',
      model: 'Tuttnauer 3850EL',
      lifecycle: {
        installed: '2019-09-22',
        nextService: '2026-04-05',
        expectedLife: '12 years'
      },
      procedures: [
        { id: 1, name: 'Pre-Use Biological Indicator Test', frequency: 'Weekly', priority: 'Red', skills: ['Lab Technician'], duration: '0.5 hours' },
        { id: 2, name: 'Pressure & Temperature Validation', frequency: 'Monthly', priority: 'Red', skills: ['Lab Technician', 'Biomedical Engineer'], duration: '1.5 hours' },
        { id: 3, name: 'Annual Service & Calibration', frequency: 'Annual', priority: 'Red', skills: ['Authorized Service Engineer'], duration: '3 hours' }
      ],
      countries: {
        uk: { validated: true, amendments: 'BS EN 285 sterilization standard compliance' },
        de: { validated: true, amendments: 'DIN EN 285 requirements' },
        us: { validated: true, amendments: 'FDA and AAMI sterilization validation' }
      }
    },
    'vault-door-001': {
      code: 'VAULT-001',
      name: 'Vault Door Mechanism',
      criticality: 'Critical',
      description: 'Multi-lock high-security vault door system with time-delay mechanisms',
      facilities: ['Banking Branch'],
      condition: 'Excellent',
      model: 'Diebold Nixdorf TL30-X6',
      lifecycle: {
        installed: '2015-04-18',
        nextService: '2026-03-25',
        expectedLife: '30 years'
      },
      procedures: [
        { id: 1, name: 'Lock Mechanism Inspection', frequency: 'Quarterly', priority: 'Red', skills: ['Certified Vault Technician'], duration: '2 hours' },
        { id: 2, name: 'Time Lock Verification', frequency: 'Monthly', priority: 'Red', skills: ['Certified Vault Technician'], duration: '1.5 hours' },
        { id: 3, name: 'Full Audit & Documentation', frequency: 'Annual', priority: 'Red', skills: ['Security Manager', 'Vault Technician'], duration: '4 hours' }
      ],
      countries: {
        uk: { validated: true, amendments: 'Financial Conduct Authority security standards' },
        de: { validated: true, amendments: 'German Banking Security Standards (BaFin)' },
        us: { validated: true, amendments: 'Federal Reserve vault security requirements' }
      }
    },
    'ups-001': {
      code: 'UPS-001',
      name: 'Uninterruptible Power Supply',
      criticality: 'Critical',
      description: 'High-capacity UPS system providing backup power to critical systems',
      facilities: ['Banking Branch', 'Data Centre'],
      condition: 'Good',
      model: 'Eaton 9PX 250kW',
      lifecycle: {
        installed: '2020-07-08',
        nextService: '2026-04-08',
        expectedLife: '12 years'
      },
      procedures: [
        { id: 1, name: 'Battery Capacity Test', frequency: 'Quarterly', priority: 'Red', skills: ['UPS Technician'], duration: '3 hours' },
        { id: 2, name: 'Load Transfer Test', frequency: 'Monthly', priority: 'Amber', skills: ['Electrician'], duration: '1.5 hours' },
        { id: 3, name: 'Full System Load Test', frequency: 'Annual', priority: 'Red', skills: ['UPS Technician', 'Electrical Engineer'], duration: '6 hours' }
      ],
      countries: {
        uk: { validated: true, amendments: 'BS EN 62040-1 UPS requirements' },
        de: { validated: true, amendments: 'DIN EN 62040 standards' },
        us: { validated: true, amendments: 'ANSI/IEEE C62.41 surge protection' }
      }
    },
    'sprinkler-001': {
      code: 'SPR-001',
      name: 'Sprinkler System',
      criticality: 'Critical',
      description: 'Automatic wet pipe sprinkler system covering entire facility',
      facilities: ['Banking Branch', 'Office', 'Warehouse'],
      condition: 'Good',
      model: 'EATON Wet Pipe System',
      lifecycle: {
        installed: '2018-11-12',
        nextService: '2026-03-28',
        expectedLife: '25 years'
      },
      procedures: [
        { id: 1, name: 'Monthly System Inspection', frequency: 'Monthly', priority: 'Amber', skills: ['Fire Safety Inspector'], duration: '1.5 hours' },
        { id: 2, name: 'Valve & Head Inspection', frequency: 'Quarterly', priority: 'Amber', skills: ['Licensed Sprinkler Inspector'], duration: '2 hours' },
        { id: 3, name: 'Annual Hydro Test', frequency: 'Annual', priority: 'Red', skills: ['Licensed Sprinkler Contractor'], duration: '4 hours' }
      ],
      countries: {
        uk: { validated: true, amendments: 'BS 9251 automatic sprinkler systems' },
        de: { validated: true, amendments: 'DIN EN 12845 sprinkler system standard' },
        us: { validated: true, amendments: 'NFPA 13 sprinkler system design' }
      }
    }
  };

  const facilityOptions = [
    { value: 'all', label: 'All Facilities' },
    { value: 'banking', label: 'Banking Branch' },
    { value: 'datacenter', label: 'Data Centre' },
    { value: 'lab', label: 'Laboratory' },
    { value: 'cleanroom', label: 'Cleanroom' },
    { value: 'warehouse', label: 'Warehouse' },
    { value: 'office', label: 'Office' }
  ];

  const countryOptions = [
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'us', label: 'United States' }
  ];

  // Handler functions
  const toggleGroup = (groupId) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  const toggleElement = (elementId) => {
    setExpandedElements(prev => ({
      ...prev,
      [elementId]: !prev[elementId]
    }));
  };

  const selectAsset = (assetId) => {
    setSelectedAsset(assetId);
  };

  // Priority color mapping
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Red':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'Amber':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Green':
        return 'bg-green-100 text-green-800 border-green-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getCriticalityColor = (criticality) => {
    switch (criticality) {
      case 'Critical':
        return 'text-red-700 font-bold';
      case 'High':
        return 'text-orange-700 font-semibold';
      case 'Medium':
        return 'text-yellow-700';
      default:
        return 'text-green-700';
    }
  };

  // Filter assets based on search and facility filter
  const filterAsset = (assetId) => {
    const asset = assetDetails[assetId];
    if (!asset) return false;

    const matchesSearch =
      asset.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFacility =
      facilityFilter === 'all' ||
      asset.facilities.some(f => {
        const facilityMap = {
          'banking': 'banking',
          'Banking Branch': 'banking',
          'datacenter': 'datacenter',
          'Data Centre': 'datacenter',
          'lab': 'lab',
          'Laboratory': 'lab',
          'cleanroom': 'cleanroom',
          'Cleanroom': 'cleanroom',
          'warehouse': 'warehouse',
          'Warehouse': 'warehouse',
          'office': 'office',
          'Office': 'office'
        };
        return facilityMap[f] === facilityFilter;
      });

    return matchesSearch && matchesFacility;
  };

  const currentAsset = assetDetails[selectedAsset];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* LEFT SIDEBAR - NRM3 Hierarchy */}
      <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
        {/* Logo & Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 border-b border-blue-800">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-blue-600">M</div>
            <span className="font-bold text-lg">MyFM</span>
          </div>
          <p className="text-blue-100 text-xs">Asset Taxonomy Browser</p>
        </div>

        {/* NRM3 Hierarchy Tree */}
        <div className="p-4">
          <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3">NRM3 Classification</h3>
          <div className="space-y-1">
            {Object.entries(nrmHierarchy).map(([groupId, group]) => (
              <div key={groupId}>
                <button
                  onClick={() => toggleGroup(groupId)}
                  className="w-full flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-100 text-sm font-medium text-gray-800 transition-colors"
                >
                  {Object.keys(group.elements).length > 0 ? (
                    expandedGroups[groupId] ? <ChevronDown size={16} /> : <ChevronRight size={16} />
                  ) : (
                    <div className="w-4"></div>
                  )}
                  <span className="font-bold text-gray-700">{groupId}.</span>
                  <span>{group.name}</span>
                </button>

                {expandedGroups[groupId] && Object.keys(group.elements).length > 0 && (
                  <div className="ml-4 space-y-1">
                    {Object.entries(group.elements).map(([elementId, element]) => (
                      <div key={elementId}>
                        <button
                          onClick={() => toggleElement(elementId)}
                          className="w-full flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 text-xs text-gray-700 transition-colors"
                        >
                          {Object.keys(element.subElements || {}).length > 0 ? (
                            expandedElements[elementId] ? <ChevronDown size={14} /> : <ChevronRight size={14} />
                          ) : (
                            <div className="w-4"></div>
                          )}
                          <span className="font-semibold text-gray-600">{elementId}</span>
                          <span className="truncate">{element.name}</span>
                        </button>

                        {expandedElements[elementId] && Object.keys(element.subElements || {}).length > 0 && (
                          <div className="ml-4 space-y-0.5">
                            {Object.entries(element.subElements).map(([assetId, asset]) => (
                              <button
                                key={assetId}
                                onClick={() => selectAsset(assetId)}
                                className={`w-full flex items-center gap-2 px-2 py-1 rounded text-xs transition-colors ${
                                  selectedAsset === assetId
                                    ? 'bg-blue-100 text-blue-700 border-l-2 border-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                              >
                                <span className="text-gray-400">•</span>
                                <span className="truncate font-medium">{asset.code}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col">
        {/* TOP BAR */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
          <div className="grid grid-cols-12 gap-4">
            {/* Search */}
            <div className="col-span-4">
              <label className="block text-xs font-semibold text-gray-700 mb-2">Search Assets</label>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Code, name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Facility Filter */}
            <div className="col-span-4">
              <label className="block text-xs font-semibold text-gray-700 mb-2">Facility Type</label>
              <select
                value={facilityFilter}
                onChange={(e) => setFacilityFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {facilityOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Country Selector */}
            <div className="col-span-4">
              <label className="block text-xs font-semibold text-gray-700 mb-2">Country / Region</label>
              <div className="flex gap-2">
                <MapPin className="text-gray-400 self-center mt-2" size={16} />
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {countryOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT - Asset Details */}
        <div className="flex-1 overflow-y-auto p-6">
          {currentAsset ? (
            <div className="space-y-6">
              {/* Asset Header Card */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">{currentAsset.code}</span>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getCriticalityColor(currentAsset.criticality)} bg-opacity-10`}>
                        {currentAsset.criticality} Criticality
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{currentAsset.name}</h2>
                    <p className="text-gray-600 mt-1">{currentAsset.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Model</p>
                    <p className="text-sm text-gray-900">{currentAsset.model}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Condition</p>
                    <p className="text-sm text-gray-900">{currentAsset.condition}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Installed</p>
                    <p className="text-sm text-gray-900">{currentAsset.lifecycle.installed}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Expected Life</p>
                    <p className="text-sm text-gray-900">{currentAsset.lifecycle.expectedLife}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Used in Facility Types</p>
                  <div className="flex flex-wrap gap-2">
                    {currentAsset.facilities.map(facility => (
                      <span key={facility} className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* SFG20 Procedures Table */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                  <h3 className="text-lg font-bold text-gray-900">Linked SFG20 Maintenance Procedures</h3>
                  <p className="text-sm text-gray-600 mt-1">{currentAsset.procedures.length} procedures defined</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">Procedure Name</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">Frequency</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">Priority</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">Required Skills</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {currentAsset.procedures.map((proc) => (
                        <tr key={proc.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{proc.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{proc.frequency}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${getPriorityColor(proc.priority)}`}>
                              {proc.priority}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            <div className="flex flex-wrap gap-1">
                              {proc.skills.map(skill => (
                                <span key={skill} className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">{proc.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Country Variations */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <MapPin size={18} />
                    Country Variations & Compliance
                  </h3>
                </div>

                <div className="p-6 space-y-3">
                  {Object.entries(currentAsset.countries).map(([country, data]) => {
                    const countryName = countryOptions.find(c => c.value === country)?.label;
                    return (
                      <div key={country} className={`p-4 rounded-lg border ${data.validated ? 'border-green-200 bg-green-50' : 'border-amber-200 bg-amber-50'}`}>
                        <div className="flex items-start justify-between mb-2">
                          <p className="font-bold text-gray-900">{countryName}</p>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${data.validated ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                            {data.validated ? 'Validated' : 'Pending Validation'}
                          </span>
                        </div>
                        <div className="flex gap-2 text-sm">
                          <AlertCircle size={16} className={data.validated ? 'text-green-600' : 'text-amber-600'} />
                          <p className={data.validated ? 'text-green-900' : 'text-amber-900'}>{data.amendments}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-gray-500 text-lg font-medium">Select an asset from the taxonomy to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssetTaxonomyBrowser;
