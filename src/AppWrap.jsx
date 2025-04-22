export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar 
          image='https://images.unsplash.com/photo-1745176593149-4dc4cd03d53e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          name='Bob'
          size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>

      <Navbar>
        <Avatar 
          image='https://images.unsplash.com/photo-1745176593149-4dc4cd03d53e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          name='Bob'
          size={200}
        />
      </Navbar>
    </div>
  )
}

function Navbar({ children }) {
  return (
    <header style={{ backgroundColor: 'mediumturquoise' }}>
      {children}
    </header>
  )
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img 
        src={image} 
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    </div>
  )
}