class Symbol
  def to_proc # !> method redefined; discarding old to_proc
    Proc.new { |obj| obj.public_send(self)}
  end
end
%w{ david black }.map &:capitalize # => ["David", "Black"]
