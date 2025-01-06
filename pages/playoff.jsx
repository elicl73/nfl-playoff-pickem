import Team from 'components/team'

export default function PlayoffPage() {
  return (
    <>
      <div className="flex flex-col h-[35rem] justify-between">
        <div className="flex justify-between p-2">
          <Team teamId={2} smallSize={true} />
          <Team teamId={6} smallSize={true} />
          <Team teamId={2} smallSize={true} />
          <Team teamId={6} smallSize={true} />
        </div>
        <div className="flex justify-between p-2">
          <Team teamId={23} smallSize={true} />
          <Team teamId={9} smallSize={true} />
        </div>
        <div className="flex justify-between p-2">
          <Team teamId={12} smallSize={true} />
          <Team teamId={8} smallSize={true} />
        </div>
        <div className="flex justify-between p-2">
          <Team teamId={15} smallSize={true} />
          <Team teamId={14} smallSize={true} />
        </div>
        <div className="flex justify-between p-2">
          <Team teamId={34} smallSize={true} />
          <Team teamId={27} smallSize={true} />
        </div>
        <div className="flex justify-between p-2">
          <Team teamId={5} smallSize={true} />
          <Team teamId={21} smallSize={true} />
        </div>
      </div>
    </>
  )
}
