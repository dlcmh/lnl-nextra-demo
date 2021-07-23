import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu } from 'antd'
import 'antd/dist/antd.css'

const menu = (
  <Menu>
    <Menu.Item key="1">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="2" icon={<DownOutlined />} disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item key="3" disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item key="4" danger>
      a danger item
    </Menu.Item>
  </Menu>
)

export function DropDownDemo() {
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Hover me <DownOutlined />
      </a>
    </Dropdown>
  )
}
