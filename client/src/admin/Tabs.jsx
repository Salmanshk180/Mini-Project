import React from 'react';
import './Dashboard'; // Import your CSS file
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabsPage = () => {
  return (
    <div className="tabs-page">
        <h4>Tabs</h4>
      <div className="tab-container">   
        <Tabs>
            <h6>Defaul Tabs</h6>
          <TabList>
            <Tab>Profile</Tab>
            <Tab>Dashboard</Tab>
            <Tab>Settings</Tab>
            <Tab>Contacts</Tab>
            <Tab disabled>Disabled</Tab>
          </TabList>

          <TabPanel>
            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
          </TabPanel>
          <TabPanel>
            <h6>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</h6>
          </TabPanel>
          <TabPanel>
            <h6>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,</h6>
          </TabPanel>
          <TabPanel>
            <h6>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</h6>
          </TabPanel>
          <TabPanel>
            <h6>Disabled Content</h6>
          </TabPanel>
        </Tabs>
      </div>
      <br/>
      <div className="tab-container">   
        <Tabs>
            <h6>Tabs with underline</h6>
          <TabList className="tab-list">
          <Tab>Profile</Tab>
            <Tab>Dashboard</Tab>
            <Tab>Settings</Tab>
            <Tab>Contacts</Tab>
            <Tab disabled>Disabled</Tab>
          </TabList>

          <TabPanel>
            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
          </TabPanel>
          <TabPanel>
            <h6>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</h6>
          </TabPanel>
          <TabPanel>
            <h6>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,</h6>
          </TabPanel>
          <TabPanel>
            <h6>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</h6>
          </TabPanel>
          <TabPanel>
            <h6>Disabled Content</h6>
          </TabPanel>
        </Tabs>
      </div>
      <br/>
      <div className="tab-container">   
        <Tabs>
            <h6>Tabs with icons</h6>
          <TabList>
          <Tab><div><img src="https://cdn-icons-png.flaticon.com/128/456/456212.png" alt="Profile Icon" />Profile</div></Tab>
            <Tab><div><img src='https://cdn-icons-png.flaticon.com/128/5191/5191354.png' alt='Dashboard Icon'/>Dashboard</div></Tab>
            <Tab><div><img src='https://cdn-icons-png.flaticon.com/128/2099/2099058.png ' alt='Setting Icon'/>Settings</div></Tab>
            <Tab><div><img src='https://cdn-icons-png.flaticon.com/128/8089/8089114.png ' alt='Contacts Icon'/>Contacts</div></Tab>
            <Tab disabled>Disabled</Tab>
          </TabList>

          <TabPanel>
            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
          </TabPanel>
          <TabPanel>
            <h6>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</h6>
          </TabPanel>
          <TabPanel>
            <h6>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,</h6>
          </TabPanel>
          <TabPanel>
            <h6>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</h6>
          </TabPanel>
          <TabPanel>
            <h6>Disabled Content</h6>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TabsPage;
